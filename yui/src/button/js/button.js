// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_superclean
 * @copyright  2016 Justin Hunt  <justin@poodll.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_superclean-button
 */

/**
 * Atto text editor superclean plugin.
 *
 * @namespace M.atto_superclean
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */
var COMPONENTNAME = 'atto_superclean';


Y.namespace('M.' + COMPONENTNAME).Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function(config) {
        this.addButton({
            callback: this._bustspans,
            title: 'pluginname',
            icon: 'icon',
            iconComponent: COMPONENTNAME
        });
    },

    /**
     * Display the word superclean popup.
     *
     * @method _displayDialogue
     * @private
     */
    _bustspans: function() {
        var startValue = this.editor.get('innerHTML');
        newValue = startValue.replace(/<\/?span[^>]*>/g,"");
        var newValue = newValue.replace(/style="[^\"]*"/g, '');
        this.editor.set('innerHTML', newValue);
    }
});
