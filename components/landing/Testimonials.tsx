"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  feedback: string;
  image: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (!loading && testimonials.length === 0) {
    return null; // hide section if no testimonials
  }

  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            What Our <span className="text-muted-foreground">Clients Say</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          {loading ? (
            <div className="flex gap-4 overflow-hidden">
               {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[300px] h-[300px] bg-muted/20 animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="h-full border-border bg-background/50 hover:border-primary transition-colors">
                      <CardContent className="p-8">
                        <div className="mb-6 text-primary">
                          <Quote className="w-8 h-8 opacity-20 fill-current" />
                        </div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-8 leading-relaxed italic">
                          &quot;{testimonial.feedback}&quot;
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center font-bold text-primary">
                            {testimonial.image ? (
                              <Image 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                fill 
                                className="object-cover"
                              />
                            ) : (
                              testimonial.name[0]
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
