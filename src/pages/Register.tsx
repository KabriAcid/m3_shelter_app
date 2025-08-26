import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { FormInput } from "../components/FormInput";
import { Button } from "../components/Button";
import { useFormValidation } from "../hooks/useFormValidation";
import {
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
  validateFullName,
} from "../utils/validation";

export const Register: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    fields,
    setFieldValue,
    setFieldTouched,
    validateAllFields,
    isFormValid,
    isSubmitting,
    setIsSubmitting,
  } = useFormValidation({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      fullName: validateFullName,
      email: validateEmail,
      phone: validatePhone,
      password: validatePassword,
      confirmPassword: (value, allValues) =>
        validateConfirmPassword(allValues?.password || "", value),
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Here you would typically make an API call to register the user
      console.log("Registration successful:", {
        fullName: fields.fullName.value,
        email: fields.email.value,
        phone: fields.phone.value,
        password: fields.password.value,
      });

      // Redirect to login page or dashboard
      alert("Registration successful! Please login to continue.");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <div className="mx-auto h-12 w-12 bg-[#053DA6] rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#261C15]">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join M3 Concepts and start your real estate investment journey
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <FormInput
              label="Full Name"
              type="text"
              value={fields.fullName.value}
              onChange={(e) => setFieldValue("fullName", e.target.value)}
              onBlur={() => setFieldTouched("fullName")}
              error={fields.fullName.error}
              touched={fields.fullName.touched}
              icon={<User className="h-5 w-5" />}
              placeholder="Enter your full name"
            />

            <FormInput
              label="Email Address"
              type="email"
              value={fields.email.value}
              onChange={(e) => setFieldValue("email", e.target.value)}
              onBlur={() => setFieldTouched("email")}
              error={fields.email.error}
              touched={fields.email.touched}
              icon={<Mail className="h-5 w-5" />}
              placeholder="Enter your email address"
            />

            <FormInput
              label="Phone Number"
              type="tel"
              value={fields.phone.value}
              onChange={(e) => setFieldValue("phone", e.target.value)}
              onBlur={() => setFieldTouched("phone")}
              error={fields.phone.error}
              touched={fields.phone.touched}
              icon={<Phone className="h-5 w-5" />}
              placeholder="+234 or 0801 234 5678"
            />

            <div className="relative">
              <FormInput
                label="Password"
                type={showPassword ? "text" : "password"}
                value={fields.password.value}
                onChange={(e) => setFieldValue("password", e.target.value)}
                onBlur={() => setFieldTouched("password")}
                error={fields.password.error}
                touched={fields.password.touched}
                icon={<Lock className="h-5 w-5" />}
                placeholder="Create a strong password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="relative">
              <FormInput
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                value={fields.confirmPassword.value}
                onChange={(e) =>
                  setFieldValue("confirmPassword", e.target.value)
                }
                onBlur={() => setFieldTouched("confirmPassword")}
                error={fields.confirmPassword.error}
                touched={fields.confirmPassword.touched}
                icon={<Lock className="h-5 w-5" />}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <Link to="/terms" className="text-[#053DA6] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-[#053DA6] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            loading={isSubmitting}
            disabled={!isFormValid}
          >
            Create Account
          </Button>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#053DA6] hover:underline"
              >
                Sign in here
              </Link>
            </span>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};
