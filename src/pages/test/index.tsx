import { Prism } from "@mantine/prism";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;


const index = () => {
  return (
    <div>
      <Prism
        language="tsx"
        // getPrismTheme={(_theme, colorScheme) =>
        //   colorScheme === "light" ? duotoneLight : duotoneDark
        // }
      >
        {demoCode}
      </Prism>
      {/* <div dangerouslySetInnerHTML={{__html: content}}></div> */}
    </div>
  );
}

export default index