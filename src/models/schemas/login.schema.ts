import { TFunction } from 'i18next';

import { z } from 'zod';

export const loginDefaultValues: TLoginSchema = {
  email: '',
  password: '',
};

export const loginSchema = (t: TFunction<'translation', undefined>) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, { message: t('login.validation.email.required') })
      .email({ message: t('login.validation.email.invalid') }),
    password: z
      .string()
      .min(1, { message: t('login.validation.password.required') })
      .min(8, { message: t('login.validation.password.minLength') }),
  });

export type TLoginSchema = z.infer<ReturnType<typeof loginSchema>>;