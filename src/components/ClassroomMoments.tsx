import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Camera, 
  Calendar,
  Users,
  Palette,
  BookOpen,
  Microscope
} from 'lucide-react';

const ClassroomMoments = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const moments = [
    {
      id: 1,
      teacher: "Ms. Sarah Johnson",
      subject: "Art & Creativity",
      time: "2 hours ago",
      content: "Our students created beautiful self-portraits today! Look at the amazing detail and creativity they put into their work. Each piece tells a unique story about how they see themselves.",
      image: "/api/placeholder/500/300",
      tags: ["Art", "Creativity", "Self-Expression"],
      likes: 12,
      comments: 5,
      icon: Palette,
      color: "engagement"
    },
    {
      id: 2,
      teacher: "Mr. David Chen",
      subject: "Science Discovery",
      time: "4 hours ago",
      content: "Amazing science experiment day! The children were fascinated watching the volcano eruption simulation. Their questions about geology and chemistry showed such curiosity and engagement.",
      image: "/api/placeholder/500/300",
      tags: ["Science", "Experiment", "Discovery"],
      likes: 18,
      comments: 8,
      icon: Microscope,
      color: "wellness"
    },
    {
      id: 3,
      teacher: "Ms. Emily Rodriguez",
      subject: "Reading Adventure",
      time: "1 day ago",
      content: "Story time with 'The Little Prince' captured everyone's imagination today. The students asked thoughtful questions about friendship and adventure. Reading opens so many worlds!",
      image: "/api/placeholder/500/300",
      tags: ["Reading", "Literature", "Imagination"],
      likes: 15,
      comments: 7,
      icon: BookOpen,
      color: "primary"
    }
  ];

  const handleLike = (momentId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(momentId)) {
        newLiked.delete(momentId);
      } else {
        newLiked.add(momentId);
      }
      return newLiked;
    });
  };

  return (
    <section id="moments" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            <Camera className="h-4 w-4 mr-2" />
            Daily Classroom Updates
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Classroom <span className="text-primary">Moments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with your child's daily learning journey through real-time updates and photos from their teachers.
          </p>
        </div>

        {/* Moments Feed */}
        <div className="space-y-6">
          {moments.map((moment) => (
            <article
              key={moment.id}
              className="bg-card rounded-xl shadow-card border border-border overflow-hidden card-interactive"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      moment.color === 'engagement' ? 'bg-engagement-light' :
                      moment.color === 'wellness' ? 'bg-wellness-light' : 'bg-primary-light'
                    }`}>
                      <moment.icon className={`h-5 w-5 ${
                        moment.color === 'engagement' ? 'text-engagement' :
                        moment.color === 'wellness' ? 'text-wellness' : 'text-primary'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{moment.teacher}</h3>
                      <p className="text-sm text-muted-foreground">{moment.subject} • {moment.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-foreground leading-relaxed mb-4">
                  {moment.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {moment.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="px-6">
                <div className="relative rounded-lg overflow-hidden bg-muted h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Classroom photo would be displayed here</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`transition-smooth ${
                        likedPosts.has(moment.id) 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-muted-foreground hover:text-red-500'
                      }`}
                      onClick={() => handleLike(moment.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 mr-2 ${
                          likedPosts.has(moment.id) ? 'fill-current' : ''
                        }`} 
                      />
                      {moment.likes + (likedPosts.has(moment.id) ? 1 : 0)}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {moment.comments}
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary hover:bg-primary-light transition-smooth"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="text-primary border-primary hover:bg-primary-light transition-smooth"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Load More Moments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassroomMoments;