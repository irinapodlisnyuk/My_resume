import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { queryClient } from "@/api/queryClient";
import { ModalOpen } from "@/components/ModalOpen/ModalOpen";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import styles from "./Custom__contact.module.scss";

// Схема валидации Zod,
const ContactSchema = z.object({
  name: z.string().min(3, "Введите не менее 3 символов"),
  email: z.string().min(1, "Введите Email").email("Некорректный формат Email"),
  message: z
    .string()
    .min(10, "Сообщение должно быть не менее 10 символов")
    .max(1000, "Максимум 1000 символов"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

const sendMessageApi = async (data: ContactFormValues) => {
  return emailjs.send(
    "service_m6hlvnl", //ID server
    "template_2okk6mi", //ID
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    "OdfkqVGRqWEDcRtwx", // key
  );
};

export const ContactForm: FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Следим за длиной текста для счетчика символов
  const messageValue = watch("message") || "";

  // Мутация для отправки данных формы
  const contactMutation = useMutation(
    {
      mutationFn: (data: ContactFormValues) => sendMessageApi(data),
      onSuccess() {
        reset();
        setIsSuccessModalOpen(true);
        if (onSuccess) onSuccess();
      },
    },
    queryClient,
  );

  return (
    <>
      <form
        className="contact-form"
        onSubmit={handleSubmit((data) => contactMutation.mutate(data))}
      >
        {/* Поле Имя */}
        <FormField
          className={
            errors.name || contactMutation.isError
              ? "error-message__contact"
              : ""
          }
          errorMessage={errors.name?.message}
        >
          <input
            type="text"
            className="custom__contact"
            placeholder={t("input__name")}
            {...register("name")}
          />
        </FormField>

        {/* Поле Email */}
        <FormField
          className={
            errors.email || contactMutation.isError
              ? "error-message__contact"
              : ""
          }
          errorMessage={errors.email?.message}
        >
          <input
            type="email"
            className="custom__contact"
            placeholder={t("input__email")}
            {...register("email")}
          />
        </FormField>

        {/* Поле Сообщение (Textarea с каунтером букв) */}
        <FormField
          errorMessage={errors.message?.message}
          className="form-post__field--textarea"
        >
          <div className="form-post__textarea-wrapper">
            <textarea
              {...register("message")}
              placeholder={t("input__message")}
              rows={8}
              maxLength={1000}
              className={`custom__input textarea ${errors.message ? "textareaError" : ""}`}
            />
            <div className="form-post__textarea-counter">
              {messageValue.length} / 1000
            </div>
          </div>
        </FormField>

        {/* Кнопка отправки */}
        <Button type="submit" isLoading={contactMutation.isPending}>
          {t("btn_form")}
        </Button>
      </form>

      <ModalOpen
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        text={t("modal_text")}
      />
    </>
  );
};
