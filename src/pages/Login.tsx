import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FormInput } from "../components/FormInput";
import { Button } from "../components/Button";
import { useFormValidation } from "../hooks/useFormValidation";
import { validateEmail } from "../utils/validation";

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const navigate = useNavigate();

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
      email: "",
      password: "",
    },
    validators: {
      email: validateEmail,
      password: (value) => {
        if (!value.trim()) {
          return { isValid: false, error: "Password is required" };
        }
        return { isValid: true };
      },
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
      // Here you would typically make an API call to authenticate the user
      console.log("Login successful:", {
        email: fields.email.value,
        password: fields.password.value,
        rememberMe,
      });

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
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
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#261C15]">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your M3 Shelter account
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
                placeholder="Enter your password"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-[#053DA6] hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            loading={isSubmitting}
            disabled={!isFormValid}
          >
            Sign In
          </Button>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-[#053DA6] hover:underline"
              >
                Create one here
              </Link>
            </span>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};
