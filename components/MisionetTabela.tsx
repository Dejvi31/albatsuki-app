import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Sigurohuni që rruga është e saktë
import { Button } from "./ui/button";
import { useState } from "react";

const MisionetTabela = () => {
  // Shtimi i një state për misionet
  const [missions, setMissions] = useState([
    { id: 1, description: "Logohu", coins: 5, claimed: false },
    { id: 2, description: "Shiko 1 Episod", coins: 2, claimed: false },
    { id: 3, description: "Shiko 1 AMV", coins: 1, claimed: false },
    { id: 4, description: "Shiko 1 Fakt", coins: 1, claimed: false },
    { id: 5, description: "Zhvillo 1 Kuic", coins: 1, claimed: false },
    { id: 6, description: "Shiko 1 Reklamë", coins: 1, claimed: false },
  ]);

  // Funksioni për të kërkuar shpërblimin
  const claimReward = (id: number) => {
    setMissions((prevMissions) =>
      prevMissions.map((mission) =>
        mission.id === id ? { ...mission, claimed: true } : mission
      )
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Misioni</TableHead>
          <TableHead>Coins</TableHead>
          <TableHead>Veprimi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {missions.map((mission) => (
          <TableRow key={mission.id}>
            <TableCell>{mission.description}</TableCell>
            <TableCell>+{mission.coins}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                disabled={mission.claimed}
                onClick={() => claimReward(mission.id)}
              >
                {mission.claimed ? "Marrë" : "Merr"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MisionetTabela;
