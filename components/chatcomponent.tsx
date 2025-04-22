import React from 'react'
import { Textarea } from './ui/textarea'
import { useChat } from 'ai/react';
import { Button } from './ui/button';
import { Loader2, Send, TextSearch } from 'lucide-react';
import Messages from './messages';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import Markdown from './markdown';
import { Badge } from './ui/badge';

type Props = {
  reportData?: string
}

const ChatComponent = ({ reportData }: Props) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      api: "api/medichatgemini",
    });
  return (
    <div className="h-[650px] bg-muted/50 relative flex flex-col rounded-xl p-3 mt-3 gap-4">

      <Badge variant={'outline'}
        className={`absolute right-3 top-1.5 ${reportData && "bg-[#00B612]"}`}
      >
        {reportData ? "✓ Report Added" : "No Report Added"}
      </Badge>

      <div className="flex-1 overflow-y-auto">
        <Messages messages={messages} isLoading={isLoading} />
        {(data?.length !== undefined && data.length > 0) && (
          <Accordion type="single" className="text-sm" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex flex-row items-center gap-2">
                  <TextSearch /> Relevant Info
                </span>
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-wrap">
                <Markdown text={(data[data.length - 1] as any).retrievals as string} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>

      <form
        className="relative overflow-hidden rounded-lg border bg-blue-50 dark:bg-[#020817]"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              reportData: reportData as string,
            },
          });
        }}
      >
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your query here..."
          className="min-h-12 resize-none border-0 p-3 bg-blue-50 dark:bg-[#020817] shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <button
            disabled={isLoading}
            type="submit"
            className="ml-auto bg-transparent text-gray-400"
          >
            {isLoading ? "Analysing..." : ""}
            {isLoading ? (
              <Loader2 className="size-3.5 animate-spin" />
            ) : (
              <Send className="dark:text-white  text-black" />
            )}
          </button>
        </div>
      </form>
    </div>

  )
}

export default ChatComponent