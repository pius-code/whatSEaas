// Function to convert markdown to WhatsApp formatting
export const formatForWhatsApp = (text: string): string => {
  return (
    text
      // Remove citation markers like 【5†L14-L18】
      .replace(/【[^】]+】/g, "")
      // Remove markdown headers (###, ##, #)
      .replace(/^#{1,6}\s+/gm, "")
      // Convert **bold** to *bold* (WhatsApp format)
      .replace(/\*\*(.*?)\*\*/g, "*$1*")
      // Remove markdown tables and replace with simple text
      .replace(/\|.*\|/g, "")
      .replace(/[-:]+\|[-:\|]+/g, "")
      // Remove excessive blank lines
      .replace(/\n{3,}/g, "\n\n")
      // Remove > blockquotes
      .replace(/^>\s*/gm, "")
      // Clean up bullet points
      .replace(/^[\*\-]\s+/gm, "• ")
      // Remove horizontal rules
      .replace(/^[-*_]{3,}$/gm, "")
      // Remove any remaining double spaces
      .replace(/\s{2,}/g, " ")
      .trim()
  );
};
