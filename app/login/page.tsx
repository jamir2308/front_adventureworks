import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-100">
        <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
          <Image
            src="/adventure-logo.svg"
            alt="Adventure Logo"
            width={500}
            height={500}
            className="mb-6"
          />
          <h2 className="text-3xl font-bold text-center">Pedalea sin límites!</h2>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#f8f2f8]">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              src="/bike-logo.svg"
              alt="Bike Logo"
              width={100}
              height={100}
              className="mx-auto mb-2"
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Login to your Account
            </h2>
            <p className="text-gray-600">
              See what is going on with your business
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 rounded-lg p-3 border hover:bg-gray-50 transition-colors">
            <Image
              src="/google.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#f8f2f8] text-gray-500">
                or Sign in with Email
              </span>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white rounded-lg py-3 hover:bg-purple-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}