'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdFavorite } from 'react-icons/md';

export function FanmadeDisclaimer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('has-seen-fanmade-disclaimer');
    if (!hasSeenDisclaimer) {
      setOpen(true);
    }
  }, []);

  const handleOpenChange = (open) => {
    if (!open) {
      setOpen(false);
      localStorage.setItem('has-seen-fanmade-disclaimer', 'true');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-[#121212] border border-neutral-800 text-white sm:max-w-md p-0 overflow-hidden shadow-2xl gap-0 outline-none">
        
        {/* Subtle Gradient Line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />

        <div className="p-8 flex flex-col items-center text-center gap-6">
          
          {/* Icon Container */}
          <div className="h-16 w-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-2">
            <MdFavorite className="text-2xl text-neutral-300" />
          </div>

          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-bold tracking-tight text-white text-center">
              Unofficial Redesign
            </DialogTitle>
            <div className="space-y-3">
              <DialogDescription className="text-neutral-400 text-base leading-relaxed text-center">
                This is a <span className="text-neutral-200 font-medium">fan-made project</span> created to explore a modern dark-mode aesthetic while preserving the minimalist spirit of the original site.
              </DialogDescription>
              <DialogDescription className="text-neutral-500 text-sm leading-relaxed text-center">
                It is not officially affiliated with Lex Fridman. All content, trademarks, and logos belong to their respective owners.
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter className="w-full sm:justify-center mt-4">
            <Button 
              type="button" 
              onClick={() => handleOpenChange(false)}
              className="w-full bg-white text-black hover:bg-neutral-200 border-0 h-12 font-medium rounded-md transition-all duration-200"
            >
              Enter Site
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
