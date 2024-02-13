import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
export const FAQ = () => {
	return (
		<MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
			<MDBAccordion alwaysOpen={false} initialActive={-1}>
				<MDBAccordionItem
					collapseId={1}
					headerTitle="Kako mogu napraviti narudžbu na vašem sajtu?"
				>
					<strong>
						{" "}
						Odaberite željeni proizvod, dodajte ga u košaricu i
						slijedite korake za završetak kupovine.
					</strong>
				</MDBAccordionItem>
				<MDBAccordionItem
					collapseId={2}
					headerTitle="Koje vrste plaćanja prihvatate?"
				>
					<strong>
						{" "}
						Prihvaćamo različite metode plaćanja, uključujući
						kreditne kartice, PayPal, bankovne transfere i druge
						sigurne opcije.{" "}
					</strong>
				</MDBAccordionItem>
				<MDBAccordionItem
					collapseId={3}
					headerTitle="Mogu li mijenjati ili otkazati svoju narudžbu nakon što je već poslana?"
				>
					<strong>
						Nažalost, nakon što je narudžba poslana, obično nije
						moguće mijenjati ili otkazati. Kontaktirajte naš tim
						podrške za dodatnu pomoć.
					</strong>
				</MDBAccordionItem>
				<MDBAccordionItem
					collapseId={4}
					headerTitle="Kako kontaktiram korisničku podršku?"
				>
					<strong>
						Naš tim podrške dostupan je putem e-maila, telefona ili
						online chat-a. Pronađite kontakte na stranici
						"Kontaktirajte nas".
					</strong>
				</MDBAccordionItem>
				<MDBAccordionItem
					collapseId={5}
					headerTitle="Što ako primim oštećeni proizvod?"
				>
					<strong>
						Ako primite oštećeni proizvod, odmah nas obavijestite
						putem našeg tima podrške, priložite fotografije
						oštećenja i riješit ćemo situaciju.
					</strong>
				</MDBAccordionItem>
			</MDBAccordion>
		</MDBContainer>
	);
};
