import React from "react"

type Props = {
  text: string
}

const Text = ({ text }: Props) => {
  return <span className="inline-block font-medium text-amber">{text}</span>
}

export default Text
