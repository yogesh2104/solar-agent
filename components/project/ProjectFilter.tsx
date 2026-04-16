"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProjectFilterProps {
  categories: string[];
  locations: string[];
  onFilterChange: (filters: { category: string; location: string; search: string }) => void;
}

export default function ProjectFilter({
  categories,
  locations,
  onFilterChange
}: ProjectFilterProps) {
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    onFilterChange({ category, location, search });
  }, [category, location, search, onFilterChange]);

  const resetFilters = () => {
    setCategory("all");
    setLocation("all");
    setSearch("");
  };

  const hasFilters = category !== "all" || location !== "all" || search !== "";

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-4 mb-12 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
            Search Projects
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-11 bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
            Category
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="!h-11 w-full bg-background">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
            Location
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="!h-11 w-full bg-background">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button
            variant="destructive"
            className="flex-1 h-11 border-dashed hover:border-primary text-white !bg-red-600 transition-colors"
            disabled={!hasFilters}
            onClick={resetFilters}
          >
            {/* <X className="w-4 h-4 mr-2" /> */}
            Reset
          </Button>
          {/* <Button className="flex-grow h-11">
            Apply
          </Button> */}
        </div>
      </div>
    </div>
  );
}
