import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    { role: "assistant", content: "Hi, I'm Swagat's AI assistant! What would you like to know about him?" }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userQuery = input; // Save the text first!
    setMessages(prev => [...prev, {role: "user", content: userQuery}]);
    setInput("");
    setLoading(true);
    
    try {
      const API_URL = "https://swagat-react-folio.onrender.com/api/chat"
      const response = await fetch(API_URL, {        
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: input}),
      });
      if (!response.ok) throw new Error("Backed is offline");
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting to the server. Is the Flask app running?" }]);
    } finally {
      setLoading(false); // Stop "Thinking" state
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm hover:opacity-70 transition-opacity">
            ← Back
          </Link>
          <h1 className="font-mono text-sm">Ask About Swagat</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 font-mono text-sm ${
                  message.role === "user"
                    ? "bg-nav-accent text-white"
                    : "border border-white/10 text-foreground"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Swagat..."
            className="flex-1 font-mono bg-black border-white/10 focus-visible:ring-white/20"
          />
          <Button 
            type="submit" 
            size="icon"
            className="bg-nav-accent hover:bg-nav-accent/80"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
