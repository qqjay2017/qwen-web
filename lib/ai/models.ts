// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "qwq-32b",
    label: "通义千问-QwQ-32B",
    apiIdentifier: "qwen-plus",
    description:
      "QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。",
  },
  // {
  //   id: "qwen-7b",
  //   label: "通义千问-Qwen-7B",
  //   apiIdentifier: "qwen-base",
  //   description:
  //     "Qwen-7B 是由阿里云开发的基础语言模型，适用于多种自然语言处理任务。",
  // },
  // {
  //   id: "qwen-13b",
  //   label: "通义千问-Qwen-13B",
  //   apiIdentifier: "qwen-large",
  //   description:
  //     "Qwen-13B 是一个更大参数量的基础模型，提供了更强的文本理解和生成能力。",
  // },
  // {
  //   id: "qwen-vl",
  //   label: "通义千问-Qwen-VL",
  //   apiIdentifier: "qwen-vision-language",
  //   description:
  //     "Qwen-VL 是一个多模态模型，能够处理和理解图像与文本之间的关系。",
  // },
  // {
  //   id: "qwen-code",
  //   label: "通义千问-Qwen-Code",
  //   apiIdentifier: "qwen-coder",
  //   description:
  //     "专门为编程任务设计的语言模型，可以辅助代码编写、调试和技术文档创作。",
  // },
  // {
  //   id: "qwen-chat",
  //   label: "通义千问-Qwen-Chat",
  //   apiIdentifier: "qwen-chat",
  //   description: "优化用于对话场景的版本，提供更加流畅自然的人机交互体验。",
  // },
] as const;

export const DEFAULT_MODEL_NAME: string = "qwq-32b";
