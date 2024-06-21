import { z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const ArtworkSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(50, 'Max content is less 50 character.'),
    description: z.string().optional(),
    images: z
        .any()
        .refine((files: FileList) => files?.length > 0, 'Vui Lòng Cung Cấp Ít Nhất 1 Hình Ảnh')
        .refine((files: FileList) => files?.length <= 20, 'Please enter less 20 images')
        .refine(
            (files: any) => files.every((file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
            'Only .jpg, .jpeg, .png and .webp formats are supported.',
        ),
    isPublic: z.enum(['yes', 'no'], { message: 'Value is not valid.' }).default('yes'),
    isAiGenerate: z.enum(['yes', 'no'], { message: 'Value is not valid.' }),
    isAuthorArtwork: z.enum(['yes', 'no'], { message: 'Value is not valid.' }).default('yes'),
    tags: z.array(z.string()).min(1, 'Please enter one tag parameters.'),
});

export type ArtworkType = z.infer<typeof ArtworkSchema>;

// ----------------------------------------------------------------------------------

export const MangaSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(50, 'Max content is less 50 character.'),
    description: z.string().optional(),
    images: z
        .any()
        .refine((files: FileList) => files?.length > 0, 'Vui Lòng Cung Cấp Ít Nhất 1 Hình Ảnh')
        .refine((files: FileList) => files?.length <= 20, 'Please enter less 20 images')
        .refine(
            (files: any) => files.every((file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
            'Only .jpg, .jpeg, .png and .webp formats are supported.',
        ),
    isPublic: z.enum(['yes', 'no'], { message: 'Value is not valid.' }).default('yes'),
    isAiGenerate: z.enum(['yes', 'no'], { message: 'Value is not valid.' }),
    isAuthorManga: z.enum(['yes', 'no'], { message: 'Value is not valid.' }).default('yes'),
    tags: z.array(z.string()).min(1, 'Please enter one tag parameters.'),
});

export type MangaType = z.infer<typeof MangaSchema>;

// ----------------------------------------------------------------------------------
