import React, { useState, useCallback } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { ToastContext } from "../contexts/ToastContext";

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = "success") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);

      // Auto dismiss after 4 seconds
      setTimeout(() => {
        removeToast(id);
      }, 4000);
    },
    [removeToast]
  );

  const toast = {
    success: (message) => addToast(message, "success"),
    error: (message) => addToast(message, "error"),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-20 right-4 z-9999 space-y-3 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

const ToastItem = ({ toast, onClose }) => {
  const isSuccess = toast.type === "success";

  return (
    <div
      className="pointer-events-auto animate-slide-in-right min-w-[300px] max-w-md"
      style={{
        animation: "slideInRight 0.3s ease-out forwards",
      }}
    >
      <div className="relative group">
        {/* Glow Effect */}
        <div
          className={`absolute -inset-1 rounded-xl blur-lg opacity-50 ${
            isSuccess
              ? "bg-linear-to-r from-green-500 to-cyan-500"
              : "bg-linear-to-r from-red-500 to-orange-500"
          }`}
        />

        {/* Toast Card */}
        <div
          className={`relative bg-gray-900/95 backdrop-blur-lg border rounded-xl shadow-2xl overflow-hidden ${
            isSuccess ? "border-green-500/50" : "border-red-500/50"
          }`}
        >
          {/* Accent Bar */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 ${
              isSuccess
                ? "bg-linear-to-b from-green-400 to-cyan-400"
                : "bg-linear-to-b from-red-500 to-orange-500"
            }`}
          />

          {/* Content */}
          <div className="flex items-start gap-3 p-4 pl-5">
            {/* Icon */}
            <div
              className={`shrink-0 mt-0.5 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {isSuccess ? (
                <FaCheckCircle className="text-xl" />
              ) : (
                <FaExclamationCircle className="text-xl" />
              )}
            </div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-relaxed wrap-break-word">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="shrink-0 text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-800"
              aria-label="Close notification"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gray-800">
            <div
              className={`h-full ${
                isSuccess
                  ? "bg-linear-to-r from-green-400 to-cyan-400"
                  : "bg-linear-to-r from-red-500 to-orange-500"
              }`}
              style={{
                animation: "progress 4s linear forwards",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export { ToastProvider };
export default ToastProvider;
