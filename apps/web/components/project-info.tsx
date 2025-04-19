import { Info } from "lucide-react"
import { Alert, AlertDescription } from "./ui/alert"

export const ProjectInfo = () => {
  return (
    <div className="bg-muted p-4 mt-auto">
      <Alert className="bg-muted text-muted-foreground border-0">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription>
          This is a demo of NL2SQL using NLP from OpenAI for UTDallas.
        </AlertDescription>
      </Alert>
    </div>
  )
}
