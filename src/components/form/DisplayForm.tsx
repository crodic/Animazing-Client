'use client';
import { UserDisplaySchema, UserDisplayType } from '@/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';

const DisplayForm = () => {
    const form = useForm<UserDisplayType>({
        resolver: zodResolver(UserDisplaySchema),
        defaultValues: {
            'ai-generate': 'true',
        },
    });

    const onSubmit = async () => { };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="ai-generate"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Hiển Thị Hình Ảnh AI ?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex space-x-4"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">YES</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">NO</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormDescription>
                                Lựa chọn này cho phép bạn lựa chọn xem có hiển thị những tác phẩm hình ảnh do AI tạo ra
                                của người khác hay không.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button>Cập Nhật</Button>
            </form>
        </Form>
    );
};

export default DisplayForm;
