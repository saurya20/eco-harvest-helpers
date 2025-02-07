import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light via-sage to-forest-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-white/95 backdrop-blur shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-forest-dark">PlantGuard</h1>
          <p className="text-gray-600 mt-2">Plant Disease Detection System</p>
        </div>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Auth;