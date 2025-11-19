import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "SK Group Expands Construction Division with New Metro Project",
    excerpt: "We're excited to announce our latest construction project - a state-of-the-art metro commercial complex set to transform the city skyline.",
    date: "January 15, 2024",
    author: "SK Group Team",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: 2,
    title: "Legal Division Successfully Closes Major Corporate Merger",
    excerpt: "Our legal team has successfully facilitated one of the year's largest corporate mergers, showcasing our expertise in complex business law.",
    date: "December 28, 2023",
    author: "Legal Team",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: 3,
    title: "Award-Winning PR Campaign Achieves Record Results",
    excerpt: "Our PR division's recent national brand launch campaign has won multiple industry awards for innovation and effectiveness.",
    date: "December 10, 2023",
    author: "PR Department",
    category: "Public Relations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: 4,
    title: "International Business Summit Attracts 500+ Global Leaders",
    excerpt: "SK Group's Event Management division successfully organized an international summit bringing together business leaders from 20 countries.",
    date: "November 22, 2023",
    author: "Events Team",
    category: "Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    id: 5,
    title: "Eco-Friendly Tissue Line Launches with Sustainable Promise",
    excerpt: "Our tissue manufacturing division introduces a new line of 100% biodegradable products, reinforcing our commitment to sustainability.",
    date: "November 5, 2023",
    author: "Manufacturing Team",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
  {
    id: 6,
    title: "SK Group Announces Strategic Expansion Plans for 2024",
    excerpt: "CEO Shashank Pasupuleti outlines ambitious growth plans across all divisions, including new market entries and technology investments.",
    date: "October 18, 2023",
    author: "Shashank Pasupuleti",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-blue-100">
            Stay informed about our latest achievements and announcements
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {newsArticles[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {newsArticles[0].author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Updates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
