import { useState, type SetStateAction } from "react";
import type { RajzfilmType } from "../types/rajzfilmType";

interface RajzfilmProps {
    //rajzfilmek: RajzfilmType[];
    rajzfilmek: RajzfilmType;

}

export function RajzfilmKartya({ rajzfilmek }: RajzfilmProps) {

    const [premier, setPremier] = useState(false);


    return (
        <div>
            <section className="card d-inline-block" style={{ maxWidth: "320px" }} >
                <div className="card-body">
                    <h2 className="card-title">{rajzfilmek.cim}</h2>
                    <p className="card-text"> <i>{rajzfilmek.studio}</i> </p>
                    <button type="button" className="btn btn-secondary" onClick={() => setPremier(!premier)}>
                        {premier ? String(rajzfilmek.premier) : "Premier"}
                    </button>

                    {/* <p className="card-text"> {rajzfilm.premier} </p> */}
                    <p className="card-text"> <b>{rajzfilmek.megjelenesEve}</b> - {rajzfilmek.megjelenesEve < 2000 ? "Klasszikus filmek" : rajzfilmek.megjelenesEve <= 2010 ? "Régebbi rajzfilm" : "Modern rajfilm"} </p>
                </div>
            </section>


            {/* <section>
                {rajzfilmek.map((rajzfilm) => (
                    <p>{rajzfilm.megjelenesEve < 2000 ? "Klasszikus filmek" : rajzfilm.megjelenesEve <= 2010 ? "Régebbi rajzfilm" : "Modern rajfilm"} - {rajzfilm.cim}</p>
                ))}
            </section> */}


        </div>
    );
}
