"use client";

import BrutalButton from "@/components/brutal-btn";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";
import {
  Facebook,
  Link2,
  Share2,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
interface ShareProps {
  title?: string;
  url?: string;
}

export default function Share({ title = "Check this out!", url }: ShareProps) {
  const { toast } = useToast();
  const currentUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: Send,
      action: () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
          `${title}\n${currentUrl}`
        )}`;
        window.open(whatsappUrl, "_blank");
      },
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`;
        window.open(facebookUrl, "_blank");
      },
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      action: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(currentUrl)}`;
        window.open(twitterUrl, "_blank");
      },
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      name: "Instagram Story",
      icon: Instagram,
      action: () => {
        // Instagram doesn't have a direct share URL, so we'll copy the link instead
        copyToClipboard();
        toast({
          description: "Link copied to clipboard!",
        });
      },
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);

      toast({
        description: "Link copied to clipboard !",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger className="w-full h-full">
          <BrutalButton disabled className="w-full h-full">
            <Share2 className="h-4 w-4" />
          </BrutalButton>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Share this content</DrawerTitle>
            <DrawerDescription>
              Choose your preferred platform to share
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 grid grid-cols-2 gap-4">
            {shareLinks.map((platform) => (
              <Button
                key={platform.name}
                onClick={platform.action}
                className={`${platform.color} text-white flex items-center justify-center gap-2`}
              >
                <platform.icon className="h-4 w-4" />
                {platform.name}
              </Button>
            ))}

            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="col-span-2 flex items-center justify-center gap-2"
            >
              <Link2 className="h-4 w-4" />
              Copy Link
            </Button>
          </div>

          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
