import { useMDXComponent } from "next-contentlayer/hooks"

interface MdxProps {
  code: string
}
const components = {
  h1: (props: any) => <h2 className=" pt-8 mt-6 text-xl mb-4 font-medium border-t-2 border-[#2c2c2c] sm:text-3xl" {...props} />,
  h2: (props: any) => <h3 className="pt-8 mt-3 text-xl font-medium sm:text-2xl text-gray-800  dark:text-[#efefef]" {...props} />,
  h3: (props: any) => <h4 className="text-xl font-medium text-gray-700 dark:text-[#e1e1e1]" {...props} />,
  h4: (props: any) => <h5 className="text-lg font-medium text-gray-700 dark:text-[#e1e1e1]" {...props} />,
  hr: (props: any) => <hr className="relative my-5 border-t-2 border-gray-300 dark:border-gray-700 sm:pt-10" {...props} />,
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-4 [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-100/20"
      {...props}
    />
  ),
  ol: (props: any) => <ol className="pl-10 space-y-3 list-decimal" {...props} />
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={{ ...components }} />
}
