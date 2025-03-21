
import { FormikProps } from 'formik';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  formik: FormikProps<any>;
  isTextArea?: boolean;
}

export default function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  formik,
  isTextArea = false,
}: FormFieldProps) {
  const Component = isTextArea ? 'textarea' : 'input';
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Component
        id={id}
        type={type}
        {...formik.getFieldProps(id)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        rows={isTextArea ? 4 : undefined}
      />
      {formik.touched[id] && formik.errors[id] && (
        <p className="mt-1 text-sm text-red-600">{formik.errors[id]?.toString()}</p>
      )}
    </div>
  );
}