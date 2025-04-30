import React from 'react'
import { CodeBlock, CopyBlock,dracula,atomOneDark,tomorrowNightEighties } from 'react-code-blocks';
export const Code = ({line,code,language}) => {
  return (
    <div className='w-full text-sm h-90 overflow-y-scroll scrollbar-hide rounded-sm' >
    <CodeBlock
    text={code}
    language={"javascript"}
    showLineNumbers={10}
    theme={tomorrowNightEighties}
   wrapLines={true}
  />
  </div>
  )
}
