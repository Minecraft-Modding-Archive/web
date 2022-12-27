import jsonData from "../../data/mods.json";

export default function handler(req: any, res: any) {
    res.json(jsonData);
}
