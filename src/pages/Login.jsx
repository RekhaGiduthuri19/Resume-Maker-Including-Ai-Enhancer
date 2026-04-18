import React, { useState } from 'react';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col p-8 font-sans">
      {/* Top Left Logo - Updated to "resume." */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-2xl font-bold tracking-tighter text-black">
          resume<span className="text-blue-600">.</span>
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center">
        {/* Updated Main Card with Border and Reduced Size */}
        <div className="w-full max-w-[360px] border border-slate-100 rounded-lg p-10 shadow-sm">
          
          {/* Header */}
          <div className="mb-10 text-left">
            <p className="text-slate-500 text-base mb-1">Please enter your details</p>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              {isSignup ? 'Create account' : 'Welcome back'}
            </h1>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm"
              />
            </div>

            {/* Checkbox & Forgot Password */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span>Remember for 30 days</span>
              </label>
              <button type="button" className="text-blue-600 font-medium hover:underline">
                Forgot password
              </button>
            </div>

            {/* Action Button - Reduced Spacing */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors text-sm"
              >
                {isSignup ? 'Sign up' : 'Sign up'} 
              </button>
            </div>
          </form>

          {/* Footer Toggle */}
          <p className="mt-6 text-center text-slate-500 text-sm">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={() => setIsSignup(!isSignup)}
              className="font-bold text-blue-600 hover:underline focus:outline-none ml-1"
            >
              {isSignup ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;