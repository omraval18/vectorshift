export const code = `#This is from file pipeline.py

from vectorshift.node import *

from vectorshift.pipeline import *

file_node = InputNode(name='file_input', input_type='file')

model_text_node = TextNode(text='Describe this file to me.')



fileloader_node = FileLoaderNode (file_input=file_node.output())

llm_node = OpenAI_LLMNode(

    model='gpt-4.0-turbo',

    system_input=model_text_node.output(),

    prompt_input=fileloader_node.output()

)


output_node = OutputNode(

    name='my_output',

    output_type='text',

    input=llm_node.output()

)

`;
