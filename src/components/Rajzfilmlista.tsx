import type { RajzfilmType } from "../types/rajzfilmType";

interface RajzfilistaProps {
    rajzfilmek: RajzfilmType[];
}

export function RajzfilmLista({ rajzfilmek }: RajzfilistaProps) {
    const rajzfilmekszama = rajzfilmek.length

    const getOldestDate = () => {

        const sorted = [...rajzfilmek].sort((a, b) => {
            const dateA = new Date(a.megjelenesEve);
            const dateB = new Date(b.megjelenesEve);

            return dateA.getTime() - dateB.getTime();
        });

        return sorted[0];
    };
    const Legujabb = () => {

        const sorted = [...rajzfilmek].sort((a, b) => {
            const dateA = new Date(a.megjelenesEve);
            const dateB = new Date(b.megjelenesEve);

            return dateB.getTime() - dateA.getTime();
        });

        return sorted[0];
    };

    const oldest = getOldestDate();
    const legujabb = Legujabb();


    return (
        <div>

            {/* 
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Cím</th>
                        <th scope="col">Megjelenés</th>
                        <th scope="col">Premier</th>
                        <th scope="col">Studio</th>
                    </tr>
                </thead>
                <tbody>
                    {rajzfilmek.map((rajzfilm) => (
                        <tr>
                            <td>{rajzfilm.cim}</td>
                            <td>{rajzfilm.megjelenesEve}</td>
                            <td>{rajzfilm.premier} </td>
                            <td>{rajzfilm.studio} </td>
                        </tr>
                    ))}

                </tbody>
            </table> */}

            {oldest && (
                <p className="statisztika">
                    <strong>Rajzfilmek száma:</strong> {rajzfilmekszama} <br />
                    <strong>Legrégibb dátum:</strong> {oldest.megjelenesEve} ({oldest.cim}) <br />
                    <strong>Legújabb dátum:</strong> {legujabb.megjelenesEve} ({legujabb.cim}) <br />
                </p>
            )}
        </div>
    )
}