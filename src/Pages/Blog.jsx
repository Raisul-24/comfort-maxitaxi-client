import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Blog = () => {
  const dummyPosts = [
    {
      id: 1,
      title: "Top 5 Benefits of Booking a Maxi Taxi in Perth",
      date: "August 20, 2025",
      excerpt:
        "Maxi Taxis are perfect for groups, families, and airport transfers. Find out why more people are choosing Maxi Taxi Perth for comfort and affordability...",
    },
    {
      id: 2,
      title: "Perth Airport Transfers Made Easy",
      date: "July 15, 2025",
      excerpt:
        "Flying into Perth? Discover how our 24/7 airport transfer service ensures stress-free travel with no hidden charges...",
    },
    {
      id: 3,
      title: "Group Travel in Perth: Why Maxi Taxi is the Best Choice",
      date: "June 5, 2025",
      excerpt:
        "From family outings to corporate trips, group transport can be tricky. Here’s how Maxi Taxi makes group travel easy and comfortable...",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          🚖 Maxi Taxi Perth <span className="text-red-600">Blog</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We share useful tips, travel guides, and updates about taxi services in
          Perth. Stay tuned for stories from our customers, airport travel advice,
          and local insights.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              {post.title}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <FaRegCalendarAlt className="mr-2" />
              {post.date}
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="text-red-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-12 text-center">
        <p className="text-gray-700">
          👉 More posts coming soon. Meanwhile, you can{" "}
          <span className="font-semibold text-blue-900">contact us</span> for
          bookings or travel queries.
        </p>
      </div>
    </div>
  );
};

export default Blog;
