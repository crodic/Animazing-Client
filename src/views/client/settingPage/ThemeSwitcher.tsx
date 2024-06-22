'use client';

import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <RadioGroup defaultValue={theme} onValueChange={setTheme} className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="t1" />
                <Label htmlFor="r1">Light Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="t2" />
                <Label htmlFor="r2">Dark Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="syste" id="t3" />
                <Label htmlFor="r3">System</Label>
            </div>
        </RadioGroup>
    )
}

export default ThemeSwitcher