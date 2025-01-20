// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  // 是否支持多模态
  enableAttachments?:boolean
}

export const models: Array<Model> = [
  {
    id: "qwen-plus",
    label: "通义千问-Plus",
    apiIdentifier: "qwen-plus",
    description:
      "效果、速度、成本均衡",
  },
  {
    id: "qwen-max",
    label: "通义千问-Max",
    apiIdentifier: "qwen-max",
    description:
      "适合复杂任务，推理能力最强",
  },
   {
    id: "qwen-turbo",
    label: "通义千问-Turbo",
    apiIdentifier: "qwen-turbo",
    description:
      "适合复杂任务，推理能力最强",
  },
   
   {
    id: "qwen-long",
    label: "Qwen-Long",
    apiIdentifier: "qwen-long",
    description:
      "支持长达千万字文档，成本低",
  },
   {
    id: "qwen-vl-max",
    label: "通义千问VL",
    apiIdentifier: "qwen-vl-max",
    description:
      "多模态模型，视觉理解模型通义千问VL",
      enableAttachments:true
  },
  
] as const;

export const DEFAULT_MODEL_NAME: string = "qwen-plus";
