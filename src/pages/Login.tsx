import { MobileLayout } from '@/components/layout/MobileLayout';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-sm mx-auto">
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">Y</span>
          </div>
          <h1 className="text-title font-bold text-2xl mb-2">Welcome Back</h1>
          <p className="text-body">Sign in to track your buses</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-title font-medium text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-body" strokeWidth={1.5} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-accent pl-12 pr-4 py-4 rounded-xl text-body placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-title font-medium text-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-body" strokeWidth={1.5} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-accent pl-12 pr-12 py-4 rounded-xl text-body placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-body" strokeWidth={1.5} />
                ) : (
                  <Eye className="w-5 h-5 text-body" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-primary text-sm font-medium hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full btn-primary font-semibold py-4"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-white border border-border rounded-xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-accent transition-colors"
            >
              <div className="w-5 h-5 bg-red-500 rounded"></div>
              <span className="text-title font-medium">Continue with Google</span>
            </button>
            <button
              type="button"
              className="w-full bg-accent rounded-xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-hover transition-colors"
            >
              <div className="w-5 h-5 bg-blue-500 rounded"></div>
              <span className="text-title font-medium">Continue with Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center pt-4">
            <span className="text-body text-sm">Don't have an account? </span>
            <button type="button" className="text-primary font-medium text-sm hover:underline">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;