import Image from "next/image";

export default function Home() {
  const businessLinks = [
    {
      title: "Link 1",
      url: "https://your-first-link.com",
      description: "Your first link description",
      gradient: "from-slate-600 to-slate-800",
      icon: "👕"
    },
    {
      title: "Link 2",
      url: "https://your-second-link.com", 
      description: "Your second link description",
      gradient: "from-blue-600 to-indigo-700",
      icon: "📦"
    },
    {
      title: "Link 3",
      url: "https://your-third-link.com",
      description: "Your third link description",
      gradient: "from-emerald-600 to-teal-700",
      icon: "🛍️"
    },
    {
      title: "Link 4",
      url: "https://your-fourth-link.com",
      description: "Your fourth link description",
      gradient: "from-purple-600 to-violet-700",
      icon: "🏪"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 py-12 px-4">

      <div className="max-w-lg mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-xl">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl">
              🏪
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            TeslaCentric
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-sm mx-auto">
            Shop our premium collection of products and merchandise.
          </p>
        </div>

        {/* Business Links Section */}
        <div className="space-y-4 mb-8">
          {businessLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:shadow-lg hover:scale-[1.01] group">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${link.gradient} rounded-xl flex items-center justify-center shadow-md mr-5 group-hover:shadow-lg transition-all duration-200`}>
                    <span className="text-2xl">{link.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-2 text-xl">
                      {link.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {link.description}
                    </p>
                  </div>
                  <div className="ml-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>


        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2024 TeslaCentric. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}