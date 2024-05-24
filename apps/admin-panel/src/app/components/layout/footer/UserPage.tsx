import { Pagination, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState, DynamicTable } from "react";
import { useTranslation } from "react";
import { useEnterprise } from "react";

type Props = {
  taxId: number;
};

export default function UserPage({ taxId }: Props) {
  const { t } = useTranslation();
  const { getUsers } = useEnterprise();
  const [users, setUsers] = useState<any>({
    data: [],
    total: 0,
  });

  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState<boolean>(true);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <DynamicTable data={users.data} columns={[]}>
      <Pagination
        count={Math.ceil(users.total / ITEMS_PER_PAGE)}
        page={page}
        onChange={handlePageChange}
      />
    </DynamicTable>
  );
}

function DynamicTable({}) {
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>;
}
