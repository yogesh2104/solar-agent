"use client";

import { useState, useMemo, useCallback } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectFilterWrapperProps {
  initialProjects: any[];
  categories: string[];
  locations: string[];
}

export default function ProjectFilterWrapper({ 
  initialProjects, 
  categories, 
  locations 
}: ProjectFilterWrapperProps) {
  const [filters, setFilters] = useState({
    category: "all",
    location: "all",
    search: "",
  });

  const handleFilterChange = useCallback((newFilters: { category: string; location: string; search: string }) => {
    setFilters(newFilters);
  }, []);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory = filters.category === "all" || project.category === filters.category;
      const matchesLocation = filters.location === "all" || project.location === filters.location;
      
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = filters.search === "" || 
        project.title.toLowerCase().includes(searchLower) || 
        project.description.toLowerCase().includes(searchLower);

      return matchesCategory && matchesLocation && matchesSearch;
    });
  }, [initialProjects, filters]);

  return (
    <>
      <ProjectFilter 
        categories={categories} 
        locations={locations} 
        onFilterChange={handleFilterChange} 
      />

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-card/30 rounded-3xl border border-dashed border-border"
        >
          <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
        </motion.div>
      )}
    </>
  );
}
