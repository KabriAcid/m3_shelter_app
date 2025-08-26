import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { useFormValidation } from "../../hooks/useFormValidation";
import {
  validateEmail,
  validatePhone,
  validateFullName,
  validatePassword,
} from "../../utils/validation";
import {
  User,
  Mail,
  Phone,
  Lock,
  Shield,
  Bell,
  CreditCard,
  FileText,
  Eye,
  EyeOff,
  Camera,
  Save,
  Trash2,
  LogOut,
} from "lucide-react";

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Profile form validation
  const profileForm = useFormValidation({
    initialValues: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+2348012345678",
    },
    validators: {
      fullName: validateFullName,
      email: validateEmail,
      phone: validatePhone,
    },
  });

  // Password form validation
  const passwordForm = useFormValidation({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validators: {
      currentPassword: (value) => {
        if (!value.trim()) {
          return { isValid: false, error: "Current password is required" };
        }
        return { isValid: true };
      },
      newPassword: validatePassword,
      confirmPassword: (value, allValues) => {
        if (!value) {
          return { isValid: false, error: "Please confirm your new password" };
        }
        if (value !== allValues?.newPassword) {
          return { isValid: false, error: "Passwords do not match" };
        }
        return { isValid: true };
      },
    },
  });

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileForm.validateAllFields()) return;

    profileForm.setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);
    } finally {
      profileForm.setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordForm.validateAllFields()) return;

    passwordForm.setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Password updated successfully!");
      passwordForm.reset();
    } catch (error) {
      console.error("Password update failed:", error);
    } finally {
      passwordForm.setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F2] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#261C15] mb-2">
            Account Settings
          </h1>
          <p className="text-gray-600">
            Manage your account preferences and security settings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  if (tab.id === "logout") {
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setShowLogoutModal(true)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  }
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#053DA6] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
                {/* Logout Modal */}
                {showLogoutModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
                    >
                      <LogOut className="mx-auto mb-4 h-10 w-10 text-red-600" />
                      <h2 className="text-2xl font-bold mb-2 text-[#261C15]">
                        Sign Out
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Are you sure you want to sign out?
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button
                          variant="outline"
                          onClick={() => setShowLogoutModal(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            // Add your logout logic here
                            setShowLogoutModal(false);
                            window.location.href = "/login";
                          }}
                        >
                          Sign Out
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </nav>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#053DA6] rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <button className="absolute -bottom-1 -right-1 p-2 bg-[#FB7F00] rounded-full text-white hover:bg-[#e6720a] transition-colors">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#261C15]">
                      Profile Information
                    </h2>
                    <p className="text-gray-600">
                      Update your personal details and contact information
                    </p>
                  </div>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <FormInput
                    label="Full Name"
                    type="text"
                    value={profileForm.fields.fullName.value}
                    onChange={(e) =>
                      profileForm.setFieldValue("fullName", e.target.value)
                    }
                    onBlur={() => profileForm.setFieldTouched("fullName")}
                    error={profileForm.fields.fullName.error}
                    touched={profileForm.fields.fullName.touched}
                    icon={<User className="h-5 w-5" />}
                  />

                  <FormInput
                    label="Email Address"
                    type="email"
                    value={profileForm.fields.email.value}
                    onChange={(e) =>
                      profileForm.setFieldValue("email", e.target.value)
                    }
                    onBlur={() => profileForm.setFieldTouched("email")}
                    error={profileForm.fields.email.error}
                    touched={profileForm.fields.email.touched}
                    icon={<Mail className="h-5 w-5" />}
                  />

                  <FormInput
                    label="Phone Number"
                    type="tel"
                    value={profileForm.fields.phone.value}
                    onChange={(e) =>
                      profileForm.setFieldValue("phone", e.target.value)
                    }
                    onBlur={() => profileForm.setFieldTouched("phone")}
                    error={profileForm.fields.phone.error}
                    touched={profileForm.fields.phone.touched}
                    icon={<Phone className="h-5 w-5" />}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      loading={profileForm.isSubmitting}
                      disabled={!profileForm.isFormValid}
                      className="flex items-center gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Card>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-[#261C15] mb-4">
                    Change Password
                  </h2>
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div className="relative">
                      <FormInput
                        label="Current Password"
                        type={showCurrentPassword ? "text" : "password"}
                        value={passwordForm.fields.currentPassword.value}
                        onChange={(e) =>
                          passwordForm.setFieldValue(
                            "currentPassword",
                            e.target.value
                          )
                        }
                        onBlur={() =>
                          passwordForm.setFieldTouched("currentPassword")
                        }
                        error={passwordForm.fields.currentPassword.error}
                        touched={passwordForm.fields.currentPassword.touched}
                        icon={<Lock className="h-5 w-5" />}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    <div className="relative">
                      <FormInput
                        label="New Password"
                        type={showNewPassword ? "text" : "password"}
                        value={passwordForm.fields.newPassword.value}
                        onChange={(e) =>
                          passwordForm.setFieldValue(
                            "newPassword",
                            e.target.value
                          )
                        }
                        onBlur={() =>
                          passwordForm.setFieldTouched("newPassword")
                        }
                        error={passwordForm.fields.newPassword.error}
                        touched={passwordForm.fields.newPassword.touched}
                        icon={<Lock className="h-5 w-5" />}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    <div className="relative">
                      <FormInput
                        label="Confirm New Password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={passwordForm.fields.confirmPassword.value}
                        onChange={(e) =>
                          passwordForm.setFieldValue(
                            "confirmPassword",
                            e.target.value
                          )
                        }
                        onBlur={() =>
                          passwordForm.setFieldTouched("confirmPassword")
                        }
                        error={passwordForm.fields.confirmPassword.error}
                        touched={passwordForm.fields.confirmPassword.touched}
                        icon={<Lock className="h-5 w-5" />}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    <Button
                      type="submit"
                      loading={passwordForm.isSubmitting}
                      disabled={!passwordForm.isFormValid}
                    >
                      Update Password
                    </Button>
                  </form>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-[#261C15] mb-4">
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#261C15]">
                        SMS Authentication
                      </p>
                      <p className="text-sm text-gray-600">
                        Receive verification codes via SMS
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Other tabs content would go here */}
            {activeTab === "notifications" && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-[#261C15] mb-6">
                  Notification Preferences
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#261C15]">
                        Email Notifications
                      </p>
                      <p className="text-sm text-gray-600">
                        Receive updates via email
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#261C15]">
                        SMS Notifications
                      </p>
                      <p className="text-sm text-gray-600">
                        Receive important alerts via SMS
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#261C15]">
                        Investment Updates
                      </p>
                      <p className="text-sm text-gray-600">
                        Get notified about new opportunities
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button>Save Preferences</Button>
                </div>
              </Card>
            )}

            {activeTab === "billing" && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-[#261C15] mb-6">
                  Billing Information
                </h2>
                <p className="text-gray-600 mb-4">
                  Manage your payment methods and billing history
                </p>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-6 w-6 text-[#053DA6]" />
                        <div>
                          <p className="font-medium">**** **** **** 1234</p>
                          <p className="text-sm text-gray-600">Expires 12/26</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">Add Payment Method</Button>
                </div>
              </Card>
            )}

            {activeTab === "documents" && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-[#261C15] mb-6">
                  Identity Documents
                </h2>
                <p className="text-gray-600 mb-4">
                  Upload and manage your verification documents
                </p>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Upload your ID document
                    </p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
