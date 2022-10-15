import { Tool } from "../components/rent/rent.types";

export interface CreateToolInput {
  name: string;
  image: string;
  activated: boolean;
  totalStock: number;
  priceHour: number;
  priceDay: number;
}

export interface UpdateToolInput {
  id: number;
  name: string;
  image: string;
  activated: boolean;
  totalStock: number;
  priceHour: number;
  priceDay: number;
}

export interface GetToolsResponse {
  tools: Tool[];
}

export interface GetToolResponse {
  tool: Tool;
}

export interface CreateToolResponse {
  createTool: Tool;
}

export interface UpdateToolResponse {
  updateTool: Tool;
}

export interface RemoveToolResponse {
  removeTool: Tool;
}
