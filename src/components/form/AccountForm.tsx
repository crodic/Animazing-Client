'use client';
import { useFieldArray, useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { UseUpdateSchemaType, UserUpdateSchema } from '@/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import DateSelect from '../DateSelect';

const AccountForm = () => {
    const form = useForm<UseUpdateSchemaType>({
        resolver: zodResolver(UserUpdateSchema),
        defaultValues: {
            phone: '',
            displayName: '',
            introduce: '',
        },
    });

    const { fields, append } = useFieldArray({
        name: 'urls',
        control: form.control,
    });

    const onSubmit = async (e: UseUpdateSchemaType) => {
        console.log(e);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Display Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Crodic Crystal" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name. It can be your real name or a pseudonym. You can only
                                change this once every 30 days.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="introduce"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Introduce</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Crodic Crystal" {...field} />
                            </FormControl>
                            <FormDescription>You can introduce personal</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="+84 038xxxx10" {...field} />
                            </FormControl>
                            <FormDescription>This is your private phone number. It only show with you</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Birthday</FormLabel>
                            <DateSelect value={field.value || ''} onChange={field.onChange} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    {fields.map((field, index) => (
                        <FormField
                            control={form.control}
                            key={field.id}
                            name={`urls.${index}.value`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={cn(index !== 0 && 'sr-only')}>URLs</FormLabel>
                                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                                        Add links to your website, blog, or social media profiles.
                                    </FormDescription>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => append({ value: '' })}
                    >
                        Add URL Social
                    </Button>
                </div>
                <Button>Cập Nhật Thông Tin</Button>
            </form>
        </Form>
    );
};

export default AccountForm;
