import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Video,
  Paperclip,
  Smile,
  Clock,
  CheckCircle2
} from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "doctor";
  content: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  type?: "text" | "image";
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "doctor",
      content: "Hello! I'm Dr. Priya Sharma, your pediatrician. How can I help you today?",
      time: "10:30 AM",
      status: "read"
    },
    {
      id: 2,
      sender: "user", 
      content: "Hi Doctor, my 5-year-old has been having a fever since yesterday. It's around 101°F.",
      time: "10:32 AM",
      status: "read"
    },
    {
      id: 3,
      sender: "doctor",
      content: "I understand your concern. Let me ask a few questions to better assess the situation. Is your child showing any other symptoms like cough, runny nose, or loss of appetite?",
      time: "10:33 AM",
      status: "read"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent"
    };

    setMessages([...messages, message]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate doctor typing and response
    setTimeout(() => {
      const doctorResponse: Message = {
        id: messages.length + 2,
        sender: "doctor",
        content: "Thank you for that information. Based on what you've described, it sounds like it could be a common viral infection. However, I'd recommend monitoring the temperature closely. If it rises above 103°F or if your child becomes lethargic, please bring them in for an examination.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "read"
      };
      setMessages(prev => [...prev, doctorResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const quickReplies = [
    "My child has a fever",
    "Vaccination question", 
    "Feeding issues",
    "Sleep problems",
    "Skin rash",
    "Stomach pain"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="bg-gradient-card border-0 shadow-card-medical mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    PS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-foreground">Dr. Priya Sharma</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Online</span>
                    <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground">
                      Pediatric Specialist
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button size="sm" variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Chat Container */}
        <Card className="bg-card border-0 shadow-card-medical">
          <CardContent className="p-0">
            {/* Messages */}
            <ScrollArea className="h-[500px] p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className={`flex items-center justify-end space-x-1 mt-2 text-xs ${
                        message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground/70"
                      }`}>
                        <span>{message.time}</span>
                        {message.sender === "user" && (
                          <CheckCircle2 className="h-3 w-3" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-xs text-muted-foreground">Dr. Sharma is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Quick Replies */}
            <div className="p-4 border-t border-border">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Quick topics:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setNewMessage(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="flex items-end space-x-2">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-grow">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="resize-none"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button 
                  className="bg-gradient-primary text-primary-foreground"
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardContent className="p-4 text-center">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Get medical advice anytime</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Quick Response</h3>
              <p className="text-sm text-muted-foreground">Average response under 2 minutes</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardContent className="p-4 text-center">
              <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Verified Doctors</h3>
              <p className="text-sm text-muted-foreground">Licensed pediatric specialists only</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;