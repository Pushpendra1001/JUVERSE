


import React, { useState } from "react";

const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      eventName: "The Next Web",
      eventDate: "2024-02-15T00:00:00.000Z",
      description: "JU Verse, the Web3.0 community at JECRC University, hosted a workshop to explore advancements in blockchain and Web3 technology. The event covered Solidity programming on Ethereum, using Remix IDE and Meta-Mask, blockchain exploration with Ether-Scan, decentralized voting systems, data mapping, and Arweave's decentralized storage solutions. Highlights included insights from experts on Solidity programming, Arweave, and Push Protocol. Success stories from students showcased real-world applications. Key takeaways included understanding blockchain technology, decentralized storage, and Push Protocol, along with networking opportunities. The event ignited a passion for Web3, promising exciting future prospects for students.",
      "photos": [
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703775/Guest%201/drlav7yjnzbxmfy6hgrw.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739704576/Guest%201/fybumufudbulxbpdia3b.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703770/Guest%201/amxzgepxzblhshfjqjiv.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739704576/Guest%201/an0bhytsk74xke7bbylx.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703773/Guest%201/adjffsfyilrvksnpzdza.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703774/Guest%201/fj3sez5meigzpdzqtg7p.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703775/Guest%201/caiqnxiungu9aegj1znv.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703771/Guest%201/xg9phn94hcgc3dlxlsgv.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703767/Guest%201/atqucbkxndanxhllurjb.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703775/Guest%201/drlav7yjnzbxmfy6hgrw.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739704576/Guest%201/fybumufudbulxbpdia3b.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739704576/Guest%201/an0bhytsk74xke7bbylx.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703775/Guest%201/caiqnxiungu9aegj1znv.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703774/Guest%201/fj3sez5meigzpdzqtg7p.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703773/Guest%201/adjffsfyilrvksnpzdza.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703771/Guest%201/xg9phn94hcgc3dlxlsgv.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703770/Guest%201/amxzgepxzblhshfjqjiv.jpg",
        "https://res.cloudinary.com/dd5xybpel/image/upload/v1739703767/Guest%201/atqucbkxndanxhllurjb.jpg"
      ],
      reels: ["https://www.w3schools.com/html/mov_bbb.mp4"],
      guests: [
        { name: "Alice Johnson", designation: "CEO", organization: "Blockchain Inc." },
        { name: "Bob Smith", designation: "CTO", organization: "Crypto Labs" },
      ],
    },
  ]);

  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    description: "",
    photos: [],
    reels: [],
    guests: [{ name: "", designation: "", organization: "" }],
  });

  const [editingId, setEditingId] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setFormData({ ...formData, photos: fileURLs });
  };

  const handleReelChange = (e) => {
    setFormData({ ...formData, reels: e.target.value.split(",").map(url => url.trim()) });
  };

  const handleGuestChange = (index, e) => {
    const newGuests = [...formData.guests];
    newGuests[index][e.target.name] = e.target.value;
    setFormData({ ...formData, guests: newGuests });
  };

  const addGuest = () => {
    setFormData({
      ...formData,
      guests: [...formData.guests, { name: "", designation: "", organization: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setData(data.map((event) => (event.id === editingId ? { ...formData, id: editingId } : event)));
      setEditingId(null);
    } else {
      setData([...data, { ...formData, id: data.length + 1 }]);
    }
    setFormData({ eventName: "", eventDate: "", description: "", photos: [], reels: [], guests: [{ name: "", designation: "", organization: "" }] });
  };

  const handleEdit = (event) => {
    setFormData(event);
    setEditingId(event.id);
  };

  const handleDelete = (id) => {
    setData(data.filter((event) => event.id !== id));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "dev" && password === "dev") {
      setAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-10">
      <h1 className="text-4xl font-bold">Juverse Dashboard</h1>

      {/* Form Section */}
      <div className="mt-6 w-full max-w-3xl bg-white/10 p-6 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required />
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full p-2 border rounded-lg bg-transparent text-white" required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required></textarea>
          <input type="file" multiple onChange={handleFileChange} className="w-full p-2 border rounded-lg bg-transparent text-white" />
          <input type="text" name="reels" placeholder="Enter reel URLs (comma separated)" value={formData.reels.join(",")} onChange={handleReelChange} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" />

          <h2 className="text-lg font-semibold">Guests</h2>
          {formData.guests.map((guest, index) => (
            <div key={index} className="border p-2 rounded-lg space-y-2 bg-white/10">
              <input type="text" name="name" placeholder="Guest Name" value={guest.name} onChange={(e) => handleGuestChange(index, e)} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required />
              <input type="text" name="designation" placeholder="Designation" value={guest.designation} onChange={(e) => handleGuestChange(index, e)} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required />
              <input type="text" name="organization" placeholder="Organization" value={guest.organization} onChange={(e) => handleGuestChange(index, e)} className="w-full p-2 border rounded-lg bg-transparent text-white placeholder-gray-400" required />
            </div>
          ))}
          <button type="button" onClick={addGuest} className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Guest</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">{editingId ? "Update Event" : "Add Event"}</button>
        </form>
      </div>

      {/* Event List Section */}
      <div className="mt-6 w-full ">
        <div className="flex flex-col gap-10">
          {data.map((event) => (
            <div key={event.id} className="border p-4 mb-4 rounded-lg bg-white/10 ">
              <h2 className="text-xl font-semibold">{event.eventName}</h2>
              <p><strong className="text-[#37756E]">Date:</strong> {event.eventDate}</p>
              <p>{event.description}</p>

              {/* Guests Section */}
              <h3 className="text-xl font-semibold mt-2  text-[#37756E]">Guests</h3>
              <div className="space-y-1">
                {event.guests.map((guest, idx) => (
                  <p key={idx}><strong>{guest.name}</strong> - {guest.designation} at {guest.organization}</p>
                ))}
              </div>

              {/* Photos */}
              <h3 className="text-xl font-semibold mt-2 text-[#37756E]">Photos</h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2 mt-2">
                {event.photos.map((photo, idx) => (
                  <img key={idx} src={photo} className="w-24 h-24 object-cover rounded-lg" alt="Event" />
                ))}
              </div>

              {/* Reels */}
              {event.reels.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-[#37756E] mt-5">Reels</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {event.reels.map((reel, idx) => (
                      <video key={idx} controls className="w-fit rounded-lg">
                        <source src={reel} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-3 flex gap-2">
                <button onClick={() => handleEdit(event)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Edit</button>
                <button onClick={() => handleDelete(event.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      


    </div>
  );
};

export default Dashboard;
