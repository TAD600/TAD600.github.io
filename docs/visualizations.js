console.log("Visualizations gallery loaded.");


/* ==========================================================
   VISUALIZATIONS
========================================================== */

const visualizations = [

    {
        image: "images/wordcloud.png",
        title: "Word Cloud from YouTube Comments on Bangladeshi Artists",
        description: "Word cloud generated from a preliminary corpus of YouTube comments on Bangladeshi artists. The visualization provides an initial overview of the most frequently occurring words in the dataset. The vocabulary and relative frequencies will evolve as the corpus is expanded and finalized."
    },


    {
        image: "images/mignet.png",
        title: "Global Migration Network",
        description: "Evolution of the global migration network's core–periphery structure from 1990 to 2020. Core countries (orange) are identified using the Ma and Mondragón algorithm based on the incoming core–periphery (in-CP) measure, while peripheral countries are shown in blue. Node size represents weighted indegree (node strength). The migration system exhibits a highly persistent core, indicating that the world's principal destination countries have remained largely unchanged despite the expansion of international migration."
    },


    {
        image: "images/map.png",
        title: "Exporters of Cultural Products",
        description: "Comparison of weighted outdegree centrality for exporters of unique cultural products, reproducible cultural products, and non-cultural products in 2000 and 2023. Darker shades indicate greater export centrality. The maps illustrate the evolution of global trade networks, highlighting the increasing prominence of China alongside the United States over time. While reproducible cultural products (e.g., books and recorded music) have seen the emergence of new exporters, exports of unique cultural products remain concentrated in a small number of European countries and the United States."
    },


    {
        image: "images/map_pollution.png",
        title: "Evolution of Emission Outsourcing and Domestic Per Capita CO₂ Emissions Across Countries (1995–2020)",
        description: "The map shows the evolution of countries’ net imports of CO₂ embodied in traded goods (left) and domestic per capita CO₂ emissions (right) between 1995 and 2020. Net embodied carbon imports are increasingly concentrated in advanced economies, particularly in North America, Western Europe, and Australia, indicating a growing reliance on carbon-intensive production located abroad. In contrast, domestic per capita emissions remain highest in many of these countries despite some moderation over time. The comparison highlights the growing disconnect between where emissions are produced and where the associated goods are consumed, reflecting the increasing globalization of carbon-intensive production."
    },


    {
        image: "images/importers_pollution.png",
        title: "Top 10 Importers of CO₂ Embodied in International Trade",
        description: "Ranking trajectories of the top 10 importers of CO₂ embodied in international trade. Countries are classified as advanced economies (blue) and emerging market economies (orange) according to the IMF classification. Advanced economies consistently account for approximately nine of the ten largest importers of embodied CO₂, highlighting the geographical separation between the consumption and production of carbon-intensive goods."
    },


    {
        image: "images/exporter_pollution.png",
        title: "Top 10 Exporters of CO₂ Embodied in International Trade",
        description: "Ranking trajectories of the top 10 exporters of CO₂ embodied in international trade. Countries are classified as advanced economies (blue) and emerging market economies (orange) according to the IMF classification. Emerging market economies comprise around eight of the ten largest exporters, highlighting the geographical separation between the consumption and production of carbon-intensive goods."
    },


    {
        image: "images/HE.png",
        title: "Measures of Health Insurance Satisfaction in Bangladesh",
        description: "Distribution of satisfaction levels across major dimensions of health insurance services in Bangladesh, including quality of service, claim settlement, premium, coverage, deductible, insurance co-payment, documentation, and cooperation from insurance providers. The figure compares responses from individual and group insurance policyholders. Adapted from our published study in SSM – Health Systems."
    }

];


/* ==========================================================
   ELEMENTS
========================================================== */

const gallery =
    document.getElementById("visualization-gallery");

const viewer =
    document.getElementById("visualization-viewer");

const viewerImage =
    document.getElementById("visualization-viewer-image");

const viewerTitle =
    document.getElementById("visualization-viewer-title");

const viewerDescription =
    document.getElementById("visualization-viewer-description");

const closeButton =
    document.getElementById("visualization-close");


/* ==========================================================
   CREATE GALLERY
========================================================== */

visualizations.forEach((visualization, index) => {

    const item =
        document.createElement("article");

    item.className = "visualization-item";


    const img =
        document.createElement("img");

    img.src = visualization.image;

    img.alt = visualization.title;

    img.className = "visualization-thumbnail";

    img.loading = "lazy";


    /* ------------------------------------------------------
       Open viewer when image is clicked
    ------------------------------------------------------ */

    item.addEventListener("click", () => {

        openViewer(visualization);

    });


    item.appendChild(img);

    gallery.appendChild(item);

});


/* ==========================================================
   OPEN VIEWER
========================================================== */

function openViewer(visualization) {

    viewerImage.src =
        visualization.image;

    viewerImage.alt =
        visualization.title;

    viewerTitle.textContent =
        visualization.title;

    viewerDescription.textContent =
        visualization.description;


    viewer.classList.remove("hidden");

    document.body.classList.add("viewer-open");

}


/* ==========================================================
   CLOSE VIEWER
========================================================== */

function closeViewer() {

    viewer.classList.add("hidden");

    document.body.classList.remove("viewer-open");

}


/* ==========================================================
   CLOSE BUTTON
========================================================== */

closeButton.addEventListener(
    "click",
    closeViewer
);


/* ==========================================================
   CLICK OUTSIDE IMAGE TO CLOSE
========================================================== */

viewer.addEventListener("click", function(event) {

    if (event.target === viewer) {

        closeViewer();

    }

});


/* ==========================================================
   ESCAPE KEY TO CLOSE
========================================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeViewer();

    }

});