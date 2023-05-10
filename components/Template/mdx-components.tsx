import { useMDXComponent } from "next-contentlayer/hooks"

interface MdxProps {
  code: string
}
const components = {
  h1: (props: any) => <h2 className=" pt-24 mt-3 text-xl font-medium border-t-2 border-[#2c2c2c] text-rose-100/90 sm:text-3xl" {...props} />,
  h2: (props: any) => <h3 className="pt-9 mt-3 text-xl font-medium  sm:text-2xl" {...props} />,
  h3: (props: any) => <h4 className="text-xl font-medium text-rose-100/90" {...props} />,
  h4: (props: any) => <h5 className="text-lg font-medium text-rose-100/90" {...props} />,
  hr: (props: any) => <hr className="relative pt-9 border-t-2 border-rose-200/5 sm:pt-10" {...props} />,
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-100/20"
      {...props}
    />
  ),
  ol: (props: any) => <ol className="pl-10 space-y-3 list-decimal" {...props} />,
  strong: (props: any) => <strong className="font-semibold" {...props} />
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={{ ...components }} />
}
