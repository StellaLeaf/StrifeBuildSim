const fetchAll = (urls) =>
    Promise.all(
        urls.map((url) =>
            fetch(url, {
                method: "GET",
            }).then((response) => {
                if (!response.ok)
                    throw new Error("Network response was not ok");
                return response.json();
            })
        )
    );

const pushElement = (type, text, element) => {
    const NewElement = document.createElement(type);
    NewElement.textContent = text;
    element.appendChild(NewElement);
};

const render = () => {
    const TypeKey = document.getElementById("TypeForm").TypeSelect.value;
    const WeaponKey = document.getElementById("WeaponForm").WeaponSelect.value;
    const ModKey = document.getElementById("ModForm").ModSelect.value;
    console.log("------init------");
    console.log(TypeKey);
    console.log(WeaponKey);
    console.log(ModKey);
    console.log("render");
};

document.addEventListener("DOMContentLoaded", async () => {
    render();
    const TypeSelect = document.getElementById("TypeSelect");
    const WeaponSelect = document.getElementById("WeaponSelect");
    for (const name of WeaponTypes) pushElement("option", name, TypeSelect);
    TypeSelect.addEventListener("input", () => {
        const options = document.querySelectorAll("#WeaponSelect > option");
        for (const option of options) option.remove();
        const firstSelect = document.createElement("option");
        firstSelect.textContent = "武器を選択";
        firstSelect.setAttribute("value", "none");
        WeaponSelect.appendChild(firstSelect);
        WeaponSelect.disabled = false;
        if (TypeSelect.value == "blank") WeaponSelect.disabled = true;
        else
            for (const subCategory of WeaponList) {
                if (TypeSelect.value == subCategory.category) {
                    const option = document.createElement("option");
                    option.textContent = subCategory.name;
                    option.setAttribute("value", subCategory.value);
                    WeaponSelect.appendChild(option);
                }
            }
    });
    const [
        _objAr,
        _objArp,
        _objSmg,
        _objSmgp,
        _objLmg,
        _objLmgp,
        _objSr,
        _objSrp,
        _objCar,
        _objCarp,
        _objExpl,
        _objExplp,
        _objSec,
        _objSecp,
        _objMelee,
        _objMeleep,
    ] = await fetchAll(mappings);
    const myManaValueElem = document.getElementById("myMana-value");
    const enemyManaValueElem = document.getElementById("enemyMana-value");
    document.getElementById("BcCheck").addEventListener("change", render);
    document.getElementById("CfCheck").addEventListener("change", render);
    document.getElementById("SdCheck").addEventListener("change", render);
    document.getElementById("WsCheck").addEventListener("change", render);
    document.getElementById("FfCheck").addEventListener("change", render);
    document.getElementById("IsCheck").addEventListener("change", render);
    document.getElementById("BsCheck").addEventListener("change", render);
    document.getElementById("MsCheck").addEventListener("change", render);
    document.getElementById("TypeForm").addEventListener("change", render);
    document.getElementById("WeaponForm").addEventListener("change", render);
    document.getElementById("ModForm").addEventListener("change", render);
    document.getElementById("FrCheck").addEventListener("change", render);
    document.getElementById("OeFrCheck").addEventListener("change", render);
    document.getElementById("SsaCheck").addEventListener("change", render);
    document.getElementById("SbCheck").addEventListener("change", render);
    document.getElementById("EnchantForm").addEventListener("change", render);
    document.getElementById("OeForm").addEventListener("change", render);
    document.getElementById("AddonForm").addEventListener("change", render);
    document.getElementById("ArmorForm").addEventListener("change", render);
    document.getElementById("ElixirForm").addEventListener("change", render);
    document.getElementById("Accy1Form").addEventListener("change", render);
    document.getElementById("Accy2Form").addEventListener("change", render);
    document.getElementById("Accy3Form").addEventListener("change", render);
    document.getElementById("myMana").addEventListener("input", (e) => {
        myManaValueElem.innerText = e.target.value;
        render();
    });
    document.getElementById("enemyMana").addEventListener("input", (e) => {
        enemyManaValueElem.innerText = e.target.value;
        render();
    });
    document
        .getElementById("AncientEnchantForm")
        .addEventListener("change", render);
});
