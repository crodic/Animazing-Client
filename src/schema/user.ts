import * as z from 'zod';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const UserUpdateSchema = z.object({
    displayName: z
        .string()
        .min(1, 'Vui lòng nhập tên hiển thị của bạn.')
        .max(50, 'Vui lòng nhập tên không quá 50 ký tự'),
    introduce: z.string().max(200, 'Vui lòng không nhập quá 200 ký tự'),
    phone: z.string().regex(phoneRegex, 'Số điện thoại không hợp lệ.'),
    birthday: z.date().optional(),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: 'Please enter a valid URL.' }).optional(),
            }),
        )
        .optional(),
});

export type UseUpdateSchemaType = z.infer<typeof UserUpdateSchema>;

export const UserDisplaySchema = z.object({
    'ai-generate': z.enum(['true', 'false']).default('true'),
    r18: z.enum(['true', 'false']).default('false'),
});

export type UserDisplayType = z.infer<typeof UserDisplaySchema>;
