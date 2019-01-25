<!DOCTYPE html>
<html <?php language_attributs();?>>
<head>
	 <meta charset="<?php bloginfo('charset'); ?>">
	<!-- appel du CSS de font-awesome pour les icones -->
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<!-- Police de google font -->
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<!-- on appelle toujours son CSS en dernier -->
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url');?>" />
	<title><?php the_title(); ?></title>
	<?php wp_head(); ?>
</head>
<body>
	<!--HEADER-->
	<header>
		<a href="#"><img src="<?php bloginfo('template_url');?>/img/logo.png" alt="logo de Green office" /></a>
		<nav>
			<a href="#">Location</a>
			<a href="#">About Us</a>
			<a href="#">Contact</a>
		</nav>
	</header>
	<!--MAIN CONTENT-->
	<main>
		<?php if(here_posts()): ?>
			<?php while(here_posts()):the_post();?>
		<article>
			<h2><i class="fa fa-pagelines"></i> <?php the_title();?></h2>
			<img src="<?php bloginfo('template_url');?>/img/who.jpg" alt="photo de l'équipe" />
			<p>Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.</p>
			<p>Et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi, qui pro muro tuetur accolas circumfusus, augente nocte adulta terrorem quievere paulisper lucem opperientes. arbitrabantur enim nullo inpediente transgressi inopino adcursu adposita quaeque vastare, sed in cassum labores pertulere gravissimos.</p>
			<a href="#">Read more</a>
			<div class="clear"></div>
		</article>
	<?php endwhile;?>
<?php else : ?>
	<p>Aucun article !</p>
	<?php endif;?>
	</main>
	<!--FOOTER-->
	<small id="licence">
	    <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/"><img alt="Propriété de la 3W Academy" style="border-width:0" src="https://3wa.fr/wp-content/themes/3wa2015/img/logos/big.png" /></a><br /><span>Cet exercice</span> de <a href="https://3wa.fr">3W Academy</a> est mis à disposition <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/">pour l'usage personnel des étudiants, Pas de Rediffusion - Attribution - Pas d'Utilisation Commerciale - Pas de Modification - International</a>.<br />Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de <a href="mailto:contact@3wa.fr" rel="cc:morePermissions">contact@3wa.fr</a>. Les maquettes ont été réalisées par <a href="http://www.justine-muller.fr">Justine Muller</a>.
	</small>
	<?php wp_footer(); ?>
</body>
</html>
