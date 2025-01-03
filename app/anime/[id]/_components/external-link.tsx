import { IDetailAnime } from '@/types/detail/anime'
import React from 'react'
import AnimatedWrapper from './animate-wrap'
import { Button } from '@/components/ui/button'

export default function ExternalLink({data} : {data : IDetailAnime}) {
  
  return (
    <AnimatedWrapper
    className="space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {data.external.length > 0 && (
      <AnimatedWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4">External Links</h3>
        <div className="flex flex-wrap gap-2">
          {data.external.map((link, index) => (
            <AnimatedWrapper
              key={link.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Button variant="outline" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </Button>
            </AnimatedWrapper>
          ))}
        </div>
      </AnimatedWrapper>
    )}
    {data.streaming.length > 0 && (
      <AnimatedWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-4">Streaming Platforms</h3>
        <div className="flex flex-wrap gap-2">
          {data.streaming.map((platform, index) => (
            <AnimatedWrapper
              key={platform.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Button variant="outline" asChild>
                <a href={platform.url} target="_blank" rel="noopener noreferrer">{platform.name}</a>
              </Button>
            </AnimatedWrapper>
          ))}
        </div>
      </AnimatedWrapper>
    )}
  </AnimatedWrapper>
  )
}
