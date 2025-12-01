/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/ui/selectfield";
import { availableSkills, specializationOptions } from "@/utils/tesa-application";
import { FormikProps } from "formik";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export interface SkillsProps {
  formik: FormikProps<any>;
}

export const Skills = ({ formik }: SkillsProps) => {
  const [extraSkill, setExtraSkill] = useState("");

  // Access the skills array from the correct path
  const currentSkills = formik.values.skillsInformation?.skills || [];

  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    if (currentSkills.includes(skill)) {
      // Remove skill
      formik.setFieldValue(
        "skillsInformation.skills",
        currentSkills.filter((s: string) => s !== skill)
      );
    } else {
      // Add skill
      formik.setFieldValue("skillsInformation.skills", [...currentSkills, skill]);
    }
  };

  // Remove skill from selected list
  const removeSkill = (skill: string) => {
    formik.setFieldValue(
      "skillsInformation.skills",
      currentSkills.filter((s: string) => s !== skill)
    );
  };

  // Add custom skill
  const addCustomSkill = () => {
    const trimmedSkill = extraSkill.trim();
    if (trimmedSkill && !currentSkills.includes(trimmedSkill)) {
      formik.setFieldValue("skillsInformation.skills", [...currentSkills, trimmedSkill]);
      setExtraSkill("");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomSkill();
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* SELECTED SKILLS */}
      {currentSkills.length > 0 && (
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Selected Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentSkills.map((item: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md text-sm font-medium"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(item)}
                  className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AVAILABLE SKILLS */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Popular Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {availableSkills.map((item: string, index: number) => {
            const isSelected = currentSkills.includes(item);
            return (
              <Button
                key={index}
                size="sm"
                variant={isSelected ? "default" : "outline"}
                onClick={() => toggleSkill(item)}
                className={`
                  ${isSelected ? "bg-black text-white hover:bg-gray-800" : ""}
                `}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>

      {/* ADD CUSTOM SKILL */}
      <div>
        <p className="text-sm text-gray-600 mb-2">
          Can&apos;t find a skill/certification? Add your own
        </p>
        <div className="flex gap-2 mb-3">
          <Input
            name="extraSkillSet"
            placeholder="Type skill name and press Enter or click +"
            value={extraSkill}
            onChange={(e) => setExtraSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            type="button"
            size="icon"
            onClick={addCustomSkill}
            disabled={!extraSkill.trim()}
            className="bg-black text-white hover:bg-gray-800 disabled:opacity-50"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <SelectField
          name="skillsInformation.specialization"
          label="Preferred Specialization"
          placeholder="Select specialization"
          options={specializationOptions}
          formik={formik}
        />
      </div>
    </div>
  );
};